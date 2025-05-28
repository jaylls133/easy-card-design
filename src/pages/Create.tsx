
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Download, Palette } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Create = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const templateId = searchParams.get('template');
  
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    jobTitle: "Senior Developer",
    company: "Tech Solutions Inc.",
    email: "john.doe@techsolutions.com",
    phone: "+1 (555) 123-4567",
    website: "www.techsolutions.com",
    address: "123 Business Ave, City, State 12345"
  });

  const [designSettings, setDesignSettings] = useState({
    template: templateId || "1",
    fontFamily: "Inter",
    primaryColor: "#6366f1",
    backgroundColor: "#ffffff",
    textColor: "#1f2937"
  });

  // Update template when URL parameter changes
  useEffect(() => {
    if (templateId && templateId !== designSettings.template) {
      setDesignSettings(prev => ({ ...prev, template: templateId }));
    }
  }, [templateId]);

  const templates = {
    "1": { name: "Modern Tech", gradient: "from-blue-600 to-purple-600" },
    "2": { name: "Classic Business", gradient: "from-gray-800 to-gray-600" },
    "3": { name: "Creative Designer", gradient: "from-pink-500 to-orange-500" },
    "4": { name: "Medical Professional", gradient: "from-green-600 to-teal-600" },
    "5": { name: "Real Estate Pro", gradient: "from-amber-600 to-orange-600" },
    "6": { name: "Tech Startup", gradient: "from-purple-600 to-pink-600" },
    "7": { name: "Digital Innovation", gradient: "from-cyan-500 to-blue-500" },
    "8": { name: "Software Developer", gradient: "from-gray-800 to-gray-600" },
    "9": { name: "AI Expert", gradient: "from-indigo-600 to-purple-600" },
    "10": { name: "Tech Executive", gradient: "from-slate-700 to-slate-900" }
  };

  // Load Google Fonts dynamically
  useEffect(() => {
    const loadFont = (fontFamily: string) => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(' ', '+')}:wght@400;500;600;700&display=swap`;
      link.rel = 'stylesheet';
      
      // Remove existing font link if any
      const existingLink = document.querySelector(`link[href*="${fontFamily.replace(' ', '+')}"]`);
      if (existingLink) {
        existingLink.remove();
      }
      
      document.head.appendChild(link);
    };

    if (designSettings.fontFamily) {
      loadFont(designSettings.fontFamily);
    }
  }, [designSettings.fontFamily]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDesignChange = (field: string, value: string) => {
    setDesignSettings(prev => ({ ...prev, [field]: value }));
    
    // Update URL when template changes
    if (field === 'template') {
      setSearchParams({ template: value });
    }
  };

  const currentTemplate = templates[designSettings.template as keyof typeof templates] || templates["1"];

  // Create custom gradient or use template gradient
  const getCardBackground = () => {
    if (designSettings.primaryColor !== "#6366f1") {
      // If user changed primary color, create a custom gradient
      const primaryColor = designSettings.primaryColor;
      const lighterShade = primaryColor + "CC"; // Add some transparency for gradient effect
      return {
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${lighterShade} 100%)`
      };
    }
    // Use template gradient
    return {};
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            CardCraft
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/templates" className="text-gray-600 hover:text-purple-600 transition-colors">
              Templates
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Create Your Business Card
          </h1>
          <p className="text-xl text-gray-600">
            Fill in your details and customize your design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        placeholder="Your professional title"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="www.yourwebsite.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Your business address"
                      rows={2}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  Design Customization
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="template">Template</Label>
                    <Select value={designSettings.template} onValueChange={(value) => handleDesignChange('template', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(templates).map(([id, template]) => (
                          <SelectItem key={id} value={id}>{template.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fontFamily">Font Family</Label>
                      <Select value={designSettings.fontFamily} onValueChange={(value) => handleDesignChange('fontFamily', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Inter">Inter</SelectItem>
                          <SelectItem value="Roboto">Roboto</SelectItem>
                          <SelectItem value="Poppins">Poppins</SelectItem>
                          <SelectItem value="Montserrat">Montserrat</SelectItem>
                          <SelectItem value="Open Sans">Open Sans</SelectItem>
                          <SelectItem value="Lato">Lato</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="primaryColor">Primary Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primaryColor"
                          type="color"
                          value={designSettings.primaryColor}
                          onChange={(e) => handleDesignChange('primaryColor', e.target.value)}
                          className="w-16 h-10 border-2"
                        />
                        <Input
                          value={designSettings.primaryColor}
                          onChange={(e) => handleDesignChange('primaryColor', e.target.value)}
                          placeholder="#6366f1"
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Palette className="w-6 h-6 text-purple-600" />
                  Live Preview
                </h2>
                
                {/* Business Card Preview */}
                <div className="bg-gray-100 p-8 rounded-xl flex items-center justify-center">
                  <div 
                    id="business-card-preview"
                    className={`w-80 h-48 ${designSettings.primaryColor === "#6366f1" ? `bg-gradient-to-br ${currentTemplate.gradient}` : ''} rounded-lg shadow-2xl p-6 text-white relative overflow-hidden`}
                    style={{ 
                      fontFamily: designSettings.fontFamily,
                      ...getCardBackground()
                    }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{formData.fullName}</h3>
                        <p className="text-sm opacity-90 mb-3">{formData.jobTitle}</p>
                        <p className="text-sm font-medium opacity-95">{formData.company}</p>
                      </div>
                      
                      <div className="text-xs space-y-1">
                        <p className="opacity-90">{formData.email}</p>
                        <p className="opacity-90">{formData.phone}</p>
                        <p className="opacity-90">{formData.website}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  <Link to="/download" state={{ formData, designSettings }}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold">
                      <Download className="mr-2 w-5 h-5" />
                      Generate PDF & PNG
                    </Button>
                  </Link>
                  <Link to="/templates">
                    <Button variant="outline" className="w-full py-3 text-lg">
                      Change Template
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
