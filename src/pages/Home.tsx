
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Palette, Zap } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "100+ Templates",
      description: "Choose from professional designs for every industry"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Easy Editor",
      description: "Drag-and-drop interface with real-time preview"
    },
    {
      icon: <Download className="w-8 h-8 text-indigo-600" />,
      title: "Print-Ready PDF",
      description: "High-resolution downloads ready for professional printing"
    }
  ];

  const sampleCards = [
    { id: 1, style: "Modern Tech", color: "bg-gradient-to-br from-blue-600 to-purple-600" },
    { id: 2, style: "Classic Business", color: "bg-gradient-to-br from-gray-800 to-gray-600" },
    { id: 3, style: "Creative Design", color: "bg-gradient-to-br from-pink-500 to-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            CardCraft
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/templates" className="text-gray-600 hover:text-purple-600 transition-colors">
              Templates
            </Link>
            <Link to="/create" className="text-gray-600 hover:text-purple-600 transition-colors">
              Create
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Create Stunning Business Cards in Minutes
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Design professional business cards with our intuitive editor. Choose from 100+ templates, customize everything, and download print-ready PDFs—all for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold group">
                Start Designing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/templates">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-purple-50">
                Browse Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600">Professional tools for creating amazing business cards</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sample Cards Preview */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sample Designs</h2>
          <p className="text-xl text-gray-600">Get inspired by our professional templates</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sampleCards.map((card) => (
            <div key={card.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-full h-48 ${card.color} flex items-center justify-center text-white font-semibold text-lg`}>
                  <div className="text-center">
                    <div className="w-16 h-1 bg-white/30 mx-auto mb-2"></div>
                    <div className="text-sm opacity-90">{card.style}</div>
                    <div className="w-20 h-1 bg-white/30 mx-auto mt-2"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Business Card?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of professionals who trust CardCraft</p>
          <Link to="/create">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 CardCraft. Create professional business cards for free.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
