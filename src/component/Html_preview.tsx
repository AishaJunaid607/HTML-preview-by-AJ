"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import React, { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Import predefined HTML content
import { predefinedHtml } from "@/predefinehtml";

// Default export of the HTMLPreviewComponent function
export default function HTMLPreviewComponent() {
    const [htmlCode, setHtmlCode] = useState<string>("");
    const [previewHtml, setPreviewHtml] = useState<string>("");
  
    const handlePreview = (): void => {
      setPreviewHtml(htmlCode);
    };
  
    const handlePasteHtml = (): void => {
      setHtmlCode(predefinedHtml);
    };
  
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
      setHtmlCode(e.target.value);
    };
  
    return (
      <div className="flex-center bg-gray-200">
        <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg bg-card">
          <h1 className="text-2xl font-bold mb-4 text-center">HTML Previewer</h1>
          <p className="text-muted-foreground mb-4 text-center">
            Enter your HTML code and see the preview.
          </p>
          <div className="grid gap-4">
            <Textarea
              value={htmlCode}
              onChange={handleChange}
              placeholder="Enter your HTML code here..."
              className="p-4 rounded-lg border border-input bg-background text-foreground"
              rows={8}
            />
            <div className="flex justify-center gap-2">
              <Button onClick={handlePreview}>Generate Preview</Button>
              <Button onClick={handlePasteHtml}>Paste HTML</Button>
            </div>
            <div className="p-4 rounded-lg border border-input bg-background text-foreground mt-4">
              <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  