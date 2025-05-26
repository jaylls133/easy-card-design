
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
    { id: 1, name: "Modern Tech", style: "modern", industry: "tech", color: "from-blue-600 to-purple-600" },
    { id: 2, name: "Classic Business", style: "classic", industry: "business", color: "from-gray-800 to-gray-600" },
    { id: 3, name: "Creative Designer", style: "creative", industry: "design", color: "from-pink-500 to-orange-500" },
    { id: 4, name: "Medical Professional", style: "minimal", industry: "healthcare", color: "from-green-600 to-teal-600" },
    { id: 5, name: "Real Estate Pro", style: "elegant", industry: "realestate", color: "from-amber-600 to-orange-600" },
    { id: 6, name: "Finance Expert", style: "classic", industry: "finance", color: "from-blue-800 to-indigo-800" },
    { id: 7, name: "Tech Startup", style: "modern", industry: "tech", color: "from-purple-600 to-pink-600" },
    { id: 8, name: "Minimal Designer", style: "minimal", industry: "design", color: "from-gray-600 to-gray-800" },
    { id: 9, name: "Bold Marketing", style: "creative", industry: "marketing", color: "from-red-500 to-pink-500" },
    { id: 10, name: "Education Pro", style: "classic", industry: "education", color: "from-indigo-600 to-blue-600" },
    { id: 11, name: "Consultant Elite", style: "elegant", industry: "consulting", color: "from-teal-600 to-cyan-600" },
    { id: 12, name: "Fitness Coach", style: "bold", industry: "fitness", color: "from-orange-500 to-red-500" }
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
            Browse our collection of professional business card templates designed for every industry
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
