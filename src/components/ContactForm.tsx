"use client";

import { Button, Flex, Heading, Input, Text, Background, Column, Textarea } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";
import { mailchimp } from "@/resources";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type ContactFormProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const ContactForm = ({ contact }: { contact: ContactFormProps }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    if (email === "") return true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'name':
        return value.trim() === "" ? "Name is required" : "";
      case 'email':
        if (value.trim() === "") return "Email is required";
        return !validateEmail(value) ? "Please enter a valid email address" : "";
      case 'message':
        return value.trim() === "" ? "Message is required" : "";
      default:
        return "";
    }
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (touched[field as keyof typeof touched]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const debouncedValidation = debounce((field: string, value: string) => {
    if (!touched[field as keyof typeof touched]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  }, 500);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== "")) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setTouched({ name: false, email: false, message: false });
        setErrors({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {contact.title}
      </Heading>
      
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {contact.description}
      </Text>      {submitStatus === 'success' && (
        <div style={{
          position: "relative",
          width: "100%",
          maxWidth: "var(--responsive-width-s)",
          padding: "16px",
          backgroundColor: "var(--green-alpha-weak)",
          border: "1px solid var(--green-alpha-medium)",
          borderRadius: "8px",
          marginBottom: "24px",
        }}>
          <Text onBackground="neutral-strong">
            Thank you! Your message has been sent successfully. I'll get back to you soon.
          </Text>
        </div>
      )}

      {submitStatus === 'error' && (
        <div style={{
          position: "relative",
          width: "100%",
          maxWidth: "var(--responsive-width-s)",
          padding: "16px",
          backgroundColor: "var(--red-alpha-weak)",
          border: "1px solid var(--red-alpha-medium)",
          borderRadius: "8px",
          marginBottom: "24px",
        }}>
          <Text onBackground="neutral-strong">
            Sorry, there was an error sending your message. Please try again later.
          </Text>
        </div>
      )}

      <form
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Flex fillWidth maxWidth={24} direction="column" gap="16">          <Flex mobileDirection="column" gap="16">
            <Input
              id="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => {
                handleChange('name', e.target.value);
                if (!touched.name) {
                  debouncedValidation('name', e.target.value);
                }
              }}
              onBlur={() => handleBlur('name')}
              errorMessage={touched.name ? errors.name : ""}
            />
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={(e) => {
                handleChange('email', e.target.value);
                if (!touched.email) {
                  debouncedValidation('email', e.target.value);
                }
              }}
              onBlur={() => handleBlur('email')}
              errorMessage={touched.email ? errors.email : ""}
            />
          </Flex>
          
          <Textarea
            id="message"
            placeholder="Tell me about your project or just say hello..."
            required
            rows={5}
            value={formData.message}
            onChange={(e) => {
              handleChange('message', e.target.value);
              if (!touched.message) {
                debouncedValidation('message', e.target.value);
              }
            }}
            onBlur={() => handleBlur('message')}
            errorMessage={touched.message ? errors.message : ""}
          />
          
          <Flex height="48" vertical="center">
            <Button 
              type="submit" 
              size="m" 
              fillWidth 
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Flex>
        </Flex>
      </form>
    </Column>
  );
};
