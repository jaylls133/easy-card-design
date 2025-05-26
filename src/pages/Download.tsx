
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useLocation } from "react-router-dom";
import { Download, FileText, ArrowLeft } from "lucide-react";

const DownloadPage = () => {
  const location = useLocation();
  const { formData, designSettings } = location.state || {};
  
  const [paperSize, setPaperSize] = useState("a4");
  const [includeBleed, setIncludeBleed] = useState("no");

  const templates = {
    "1": { name: "Modern Tech", gradient: "from-blue-600 to-purple-600" },
    "2": { name: "Classic Business", gradient: "from-gray-800 to-gray-600" },
    "3": { name: "Creative Designer", gradient: "from-pink-500 to-orange-500" },
    "4": { name: "Medical Professional", gradient: "from-green-600 to-teal-600" },
    "5": { name: "Real Estate Pro", gradient: "from-amber-600 to-orange-600" }
  };

  const currentTemplate = templates[designSettings?.template as keyof typeof templates] || templates["1"];

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    alert("PDF download would start here! In a real implementation, this would generate a high-resolution PDF file.");
  };

  if (!formData || !designSettings) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Design Found</h2>
            <p className="text-gray-600 mb-6">Please create a business card first before downloading.</p>
            <Link to="/create">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Create Business Card
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <Link to="/create" className="text-gray-600 hover:text-purple-600 transition-colors">
              Create
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Download Your Business Card
          </h1>
          <p className="text-xl text-gray-600">
            Your design is ready! Choose your download options below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Preview Section */}
          <div>
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-purple-600" />
                  Final Preview
                </h2>
                
                {/* Print Preview */}
                <div className="bg-white p-8 rounded-xl shadow-inner border-2 border-gray-100">
                  <div className="text-center mb-4">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      3.5" × 2" (Standard Business Card Size)
                    </span>
                  </div>
                  
                  <div className="flex justify-center">
                    <div 
                      className={`w-80 h-48 bg-gradient-to-br ${currentTemplate.gradient} rounded-lg shadow-xl p-6 text-white relative overflow-hidden transform scale-110`}
                      style={{ fontFamily: designSettings.fontFamily }}
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
                </div>

                {/* Design Summary */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Design Summary</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Template:</span>
                      <span className="font-medium">{currentTemplate.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Font:</span>
                      <span className="font-medium">{designSettings.fontFamily}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Primary Color:</span>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded border border-gray-300"
                          style={{ backgroundColor: designSettings.primaryColor }}
                        ></div>
                        <span className="font-medium">{designSettings.primaryColor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Options */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Download className="w-6 h-6 text-purple-600" />
                  Download Options
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Paper Size
                    </label>
                    <Select value={paperSize} onValueChange={setPaperSize}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a4">A4 (8.27" × 11.69")</SelectItem>
                        <SelectItem value="letter">Letter (8.5" × 11")</SelectItem>
                        <SelectItem value="custom">Custom Size</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Include Bleed & Crop Marks
                    </label>
                    <Select value={includeBleed} onValueChange={setIncludeBleed}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No (Standard)</SelectItem>
                        <SelectItem value="yes">Yes (Professional Printing)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      Bleed and crop marks are helpful for professional printing
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                    <h3 className="font-semibold text-blue-900 mb-2">What You'll Get:</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• High-resolution PDF (300 DPI)</li>
                      <li>• Print-ready format</li>
                      <li>• Professional quality output</li>
                      <li>• Multiple cards per page for easy printing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Actions */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button 
                    onClick={handleDownload}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download PDF
                  </Button>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Link to="/create" state={{ formData, designSettings }}>
                      <Button variant="outline" className="w-full">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Edit Design
                      </Button>
                    </Link>
                    <Link to="/create">
                      <Button variant="outline" className="w-full">
                        Create Another
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">✅ Ready to Print!</h3>
                  <p className="text-sm text-green-800">
                    Your business card is optimized for professional printing. Take the PDF to any print shop or use your home printer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
