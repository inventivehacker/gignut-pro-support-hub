import { useState } from "react";
import { Search, Settings, BarChart3, User, CreditCard, Phone, Mail, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const categories = [
  {
    icon: CreditCard,
    title: "Lead Unlocks & Credits",
    description: "How credits work, lead unlocking, and refunds"
  },
  {
    icon: BarChart3,
    title: "Managing Leads",
    description: "Viewing, responding, and tracking opportunities"
  },
  {
    icon: User,
    title: "Account Settings",
    description: "Verification, profile setup, and visibility"
  },
  {
    icon: CreditCard,
    title: "Payments & Credit Policy",
    description: "Purchases, validity, and billing info"
  },
  {
    icon: Phone,
    title: "Contact Support",
    description: "Get direct help for account or technical issues"
  }
];

const faqs = [
  {
    question: "How do I verify my professional profile?",
    answer: "To verify your professional profile, go to Account Settings and upload the required documents such as business license, ID proof, and work portfolio. Verification typically takes 24-48 hours."
  },
  {
    question: "What happens when I unlock a lead?",
    answer: "When you unlock a lead, you get full access to the customer's contact information and project details. Credits are deducted from your account, and you can then directly communicate with the customer."
  },
  {
    question: "Are credits refundable or transferable?",
    answer: "Credits are non-refundable and non-transferable. However, if you experience technical issues preventing lead access, contact support within 48 hours for assistance."
  },
  {
    question: "How long are my credits valid?",
    answer: "Credits purchased are valid for 12 months from the date of purchase. You'll receive notifications before expiration to ensure you can use them in time."
  },
  {
    question: "How do I contact Gignut Support?",
    answer: "You can reach us via email at support@gignut.com (Mon-Sat, 24-hour response time) or submit a support ticket below for account-specific issues."
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
      >
        <span className="font-medium text-foreground">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
};

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    issueCategory: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.issueCategory || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Ticket Submitted!",
      description: "Thank you! Our team will reach out within 24 hours.",
    });

    setFormData({
      fullName: "",
      email: "",
      issueCategory: "",
      description: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Need help managing your Gignut Professional account?
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help you connect with real, intentful customers — and keep your business running smoothly.
          </p>
          <div className="flex gap-2 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Type your question or issue..."
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="h-12">
              Search Help Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Professional Support Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-border">
                <CardHeader>
                  <category.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-0">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Support</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Response within 24 hours, Mon–Sat</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:support@gignut.com" className="text-primary hover:underline font-medium">
                  support@gignut.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Help Center</CardTitle>
                <CardDescription>Self-service knowledge base</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-muted-foreground">Coming soon</span>
              </CardContent>
            </Card>
          </div>

          {/* Support Ticket Form */}
          <Card>
            <CardHeader>
              <CardTitle>Raise a Support Ticket</CardTitle>
              <CardDescription>Our team will reach out within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="issueCategory">Issue Category *</Label>
                  <Select
                    value={formData.issueCategory}
                    onValueChange={(value) => setFormData({ ...formData, issueCategory: value })}
                  >
                    <SelectTrigger id="issueCategory">
                      <SelectValue placeholder="Select an issue category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="login">Login</SelectItem>
                      <SelectItem value="credit">Credit</SelectItem>
                      <SelectItem value="lead">Lead</SelectItem>
                      <SelectItem value="verification">Verification</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Describe Your Issue *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Escalation Contact */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Escalation Contact</CardTitle>
              <CardDescription>If not resolved within 3 working days</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">Grievance Officer: Udayan Trivedi</p>
              <p>
                <Mail className="inline h-4 w-4 mr-2" />
                <a href="mailto:grievance@gignut.com" className="text-primary hover:underline">
                  grievance@gignut.com
                </a>
              </p>
              <p className="text-muted-foreground">📍 Pune, Maharashtra, India</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Helpful Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">🧭 Tips for Quick Resolution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mention your registered email ID
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Include your ServiceProviderID
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Describe issue clearly (with screenshots)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Avoid duplicate submissions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
