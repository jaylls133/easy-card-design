
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const templates = [
    // Tech & Modern Templates
    { id: 1, name: "Modern Tech", style: "modern", industry: "tech", color: "from-blue-600 to-purple-600" },
    { id: 2, name: "Tech Startup", style: "modern", industry: "tech", color: "from-purple-600 to-pink-600" },
    { id: 3, name: "Digital Innovation", style: "modern", industry: "tech", color: "from-cyan-500 to-blue-500" },
    { id: 4, name: "Software Developer", style: "minimal", industry: "tech", color: "from-gray-800 to-gray-600" },
    { id: 5, name: "AI Expert", style: "modern", industry: "tech", color: "from-indigo-600 to-purple-600" },
    { id: 6, name: "Tech Executive", style: "elegant", industry: "tech", color: "from-slate-700 to-slate-900" },
    
    // Business & Corporate
    { id: 7, name: "Classic Business", style: "classic", industry: "business", color: "from-gray-800 to-gray-600" },
    { id: 8, name: "Executive Elite", style: "elegant", industry: "business", color: "from-blue-900 to-indigo-900" },
    { id: 9, name: "Corporate Pro", style: "classic", industry: "business", color: "from-slate-600 to-slate-800" },
    { id: 10, name: "Business Leader", style: "elegant", industry: "business", color: "from-gray-700 to-blue-800" },
    { id: 11, name: "Professional Plus", style: "minimal", industry: "business", color: "from-neutral-700 to-neutral-900" },
    
    // Creative & Design
    { id: 12, name: "Creative Designer", style: "creative", industry: "design", color: "from-pink-500 to-orange-500" },
    { id: 13, name: "Minimal Designer", style: "minimal", industry: "design", color: "from-gray-600 to-gray-800" },
    { id: 14, name: "Artistic Vision", style: "creative", industry: "design", color: "from-purple-500 to-pink-500" },
    { id: 15, name: "Design Studio", style: "bold", industry: "design", color: "from-red-500 to-orange-500" },
    { id: 16, name: "Creative Agency", style: "creative", industry: "design", color: "from-emerald-500 to-teal-500" },
    { id: 17, name: "Visual Artist", style: "creative", industry: "design", color: "from-violet-500 to-purple-500" },
    
    // Healthcare & Medical
    { id: 18, name: "Medical Professional", style: "minimal", industry: "healthcare", color: "from-green-600 to-teal-600" },
    { id: 19, name: "Healthcare Hero", style: "classic", industry: "healthcare", color: "from-blue-600 to-cyan-600" },
    { id: 20, name: "Wellness Expert", style: "minimal", industry: "healthcare", color: "from-emerald-600 to-green-600" },
    { id: 21, name: "Medical Specialist", style: "elegant", industry: "healthcare", color: "from-teal-700 to-cyan-700" },
    { id: 22, name: "Health & Fitness", style: "bold", industry: "healthcare", color: "from-lime-500 to-green-500" },
    
    // Finance & Banking
    { id: 23, name: "Finance Expert", style: "classic", industry: "finance", color: "from-blue-800 to-indigo-800" },
    { id: 24, name: "Investment Pro", style: "elegant", industry: "finance", color: "from-slate-800 to-blue-900" },
    { id: 25, name: "Banking Elite", style: "classic", industry: "finance", color: "from-gray-800 to-slate-800" },
    { id: 26, name: "Financial Advisor", style: "minimal", industry: "finance", color: "from-blue-700 to-indigo-700" },
    { id: 27, name: "Wealth Manager", style: "elegant", industry: "finance", color: "from-indigo-800 to-purple-800" },
    
    // Real Estate
    { id: 28, name: "Real Estate Pro", style: "elegant", industry: "realestate", color: "from-amber-600 to-orange-600" },
    { id: 29, name: "Property Expert", style: "classic", industry: "realestate", color: "from-orange-600 to-red-600" },
    { id: 30, name: "Luxury Homes", style: "elegant", industry: "realestate", color: "from-yellow-600 to-orange-600" },
    { id: 31, name: "Real Estate Agent", style: "modern", industry: "realestate", color: "from-amber-500 to-yellow-500" },
    
    // Marketing & Advertising
    { id: 32, name: "Bold Marketing", style: "creative", industry: "marketing", color: "from-red-500 to-pink-500" },
    { id: 33, name: "Digital Marketer", style: "modern", industry: "marketing", color: "from-pink-600 to-purple-600" },
    { id: 34, name: "Brand Strategist", style: "creative", industry: "marketing", color: "from-orange-500 to-red-500" },
    { id: 35, name: "Social Media Pro", style: "bold", industry: "marketing", color: "from-fuchsia-500 to-pink-500" },
    
    // Education & Training
    { id: 36, name: "Education Pro", style: "classic", industry: "education", color: "from-indigo-600 to-blue-600" },
    { id: 37, name: "Academic Excellence", style: "minimal", industry: "education", color: "from-blue-600 to-indigo-600" },
    { id: 38, name: "Learning Expert", style: "classic", industry: "education", color: "from-violet-600 to-indigo-600" },
    { id: 39, name: "Training Specialist", style: "modern", industry: "education", color: "from-blue-500 to-purple-500" },
    
    // Consulting & Professional Services
    { id: 40, name: "Consultant Elite", style: "elegant", industry: "consulting", color: "from-teal-600 to-cyan-600" },
    { id: 41, name: "Strategy Consultant", style: "classic", industry: "consulting", color: "from-slate-600 to-teal-600" },
    { id: 42, name: "Business Advisor", style: "minimal", industry: "consulting", color: "from-gray-600 to-slate-600" },
    { id: 43, name: "Management Pro", style: "elegant", industry: "consulting", color: "from-cyan-700 to-blue-700" },
    
    // Legal & Law
    { id: 44, name: "Legal Eagle", style: "classic", industry: "legal", color: "from-slate-800 to-gray-800" },
    { id: 45, name: "Attorney at Law", style: "elegant", industry: "legal", color: "from-gray-800 to-slate-900" },
    { id: 46, name: "Legal Advisor", style: "minimal", industry: "legal", color: "from-neutral-800 to-slate-800" },
    
    // Fitness & Sports
    { id: 47, name: "Fitness Coach", style: "bold", industry: "fitness", color: "from-orange-500 to-red-500" },
    { id: 48, name: "Personal Trainer", style: "bold", industry: "fitness", color: "from-red-500 to-orange-500" },
    { id: 49, name: "Sports Pro", style: "modern", industry: "fitness", color: "from-green-500 to-emerald-500" },
    
    // Photography & Media
    { id: 50, name: "Photo Studio", style: "creative", industry: "photography", color: "from-purple-600 to-indigo-600" },
    { id: 51, name: "Visual Storyteller", style: "creative", industry: "photography", color: "from-pink-500 to-purple-500" },
    { id: 52, name: "Media Expert", style: "modern", industry: "media", color: "from-indigo-500 to-purple-500" },
    
    // Food & Restaurant
    { id: 53, name: "Chef's Choice", style: "creative", industry: "restaurant", color: "from-red-600 to-orange-600" },
    { id: 54, name: "Culinary Artist", style: "elegant", industry: "restaurant", color: "from-amber-600 to-red-600" },
    { id: 55, name: "Food & Beverage", style: "modern", industry: "restaurant", color: "from-orange-500 to-yellow-500" },
    
    // Beauty & Wellness
    { id: 56, name: "Beauty Expert", style: "elegant", industry: "beauty", color: "from-pink-500 to-rose-500" },
    { id: 57, name: "Spa & Wellness", style: "minimal", industry: "beauty", color: "from-emerald-400 to-teal-400" },
    { id: 58, name: "Style Consultant", style: "creative", industry: "beauty", color: "from-purple-400 to-pink-400" },
    
    // Additional Modern & Creative
    { id: 59, name: "Neon Dreams", style: "bold", industry: "tech", color: "from-cyan-400 to-blue-400" },
    { id: 60, name: "Gradient Master", style: "modern", industry: "design", color: "from-violet-600 to-indigo-600" },
    { id: 61, name: "Sunset Vibes", style: "creative", industry: "marketing", color: "from-orange-400 to-pink-400" },
    { id: 62, name: "Ocean Breeze", style: "minimal", industry: "consulting", color: "from-teal-500 to-cyan-500" },
    { id: 63, name: "Forest Green", style: "elegant", industry: "environmental", color: "from-green-700 to-emerald-700" },
    { id: 64, name: "Royal Purple", style: "luxury", industry: "business", color: "from-purple-800 to-indigo-800" },
    { id: 65, name: "Golden Hour", style: "luxury", industry: "realestate", color: "from-yellow-500 to-amber-500" }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStyle = selectedStyle === "all" || template.style === selectedStyle;
    const matchesIndustry = selectedIndustry === "all" || template.industry === selectedIndustry;
    return matchesSearch && matchesStyle && matchesIndustry;
  });

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
            <Link to="/create" className="text-gray-600 hover:text-purple-600 transition-colors">
              Create
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Choose Your Template
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our collection of 65+ professional business card templates designed for every industry
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            <Input
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-gray-200 focus:ring-purple-500"
            />
            
            <Select value={selectedStyle} onValueChange={setSelectedStyle}>
              <SelectTrigger>
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Styles</SelectItem>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="elegant">Elegant</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
                <SelectItem value="bold">Bold</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="realestate">Real Estate</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="photography">Photography</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="restaurant">Restaurant</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="environmental">Environmental</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedStyle("all");
                setSelectedIndustry("all");
              }}
              variant="outline"
              className="border-gray-200 hover:bg-gray-50"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${template.color} relative flex items-center justify-center`}>
                <div className="text-white text-center">
                  <div className="w-16 h-1 bg-white/30 mx-auto mb-3"></div>
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs opacity-80 mt-1">Professional Title</div>
                  <div className="w-20 h-1 bg-white/30 mx-auto mt-3"></div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/create?template=${template.id}`}>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      Select Template
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{template.name}</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full capitalize">
                    {template.style}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full capitalize">
                    {template.industry}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No templates found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;
