
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export interface FormData {
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  address: string;
}

export interface DesignSettings {
  template: string;
  fontFamily: string;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
}

export const generatePDF = async (formData: FormData, designSettings: DesignSettings) => {
  try {
    const element = document.getElementById('business-card-preview');
    if (!element) {
      throw new Error('Business card preview element not found');
    }

    // Create canvas from the business card element
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      backgroundColor: null,
      useCORS: true,
    });

    // Standard business card dimensions in mm
    const cardWidth = 85.6; // 3.375 inches
    const cardHeight = 53.98; // 2.125 inches
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [cardWidth, cardHeight]
    });

    // Convert canvas to image and add to PDF
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, cardWidth, cardHeight);

    // Save PDF
    pdf.save(`${formData.fullName.replace(/\s+/g, '_')}_business_card.pdf`);
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

export const generatePNG = async (formData: FormData, designSettings: DesignSettings) => {
  try {
    const element = document.getElementById('business-card-preview');
    if (!element) {
      throw new Error('Business card preview element not found');
    }

    // Create high-resolution canvas
    const canvas = await html2canvas(element, {
      scale: 3, // Even higher resolution for PNG
      backgroundColor: null,
      useCORS: true,
    });

    // Convert to blob and save
    canvas.toBlob((blob) => {
      if (blob) {
        saveAs(blob, `${formData.fullName.replace(/\s+/g, '_')}_business_card.png`);
      }
    }, 'image/png');
    
    return true;
  } catch (error) {
    console.error('Error generating PNG:', error);
    throw error;
  }
};

export const generateMultiCardPDF = async (formData: FormData, designSettings: DesignSettings) => {
  try {
    const element = document.getElementById('business-card-preview');
    if (!element) {
      throw new Error('Business card preview element not found');
    }

    // Create canvas from the business card element
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
    });

    // A4 dimensions in mm
    const pageWidth = 210;
    const pageHeight = 297;
    
    // Business card dimensions in mm
    const cardWidth = 85.6;
    const cardHeight = 53.98;
    
    // Calculate how many cards fit on a page
    const cardsPerRow = Math.floor(pageWidth / cardWidth);
    const cardsPerColumn = Math.floor(pageHeight / cardHeight);
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgData = canvas.toDataURL('image/png');
    
    // Add multiple cards to the page
    for (let row = 0; row < cardsPerColumn; row++) {
      for (let col = 0; col < cardsPerRow; col++) {
        const x = col * cardWidth;
        const y = row * cardHeight;
        pdf.addImage(imgData, 'PNG', x, y, cardWidth, cardHeight);
      }
    }

    // Save PDF
    pdf.save(`${formData.fullName.replace(/\s+/g, '_')}_business_cards_sheet.pdf`);
    
    return true;
  } catch (error) {
    console.error('Error generating multi-card PDF:', error);
    throw error;
  }
};
