import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "ducdev.work@gmail.com",
        href: "mailto:ducdev.work@gmail.com",
    },
    {
        icon: Phone,
        label: "Github",
        value: "github.com/DucGameDev",
        href: "https://github.com/DucGameDev",
    },
    {
        icon: MapPin,
        label: "Facebook",
        value: "facebook.com/ducbeat",
        href: "https://www.facebook.com/ducbeat",
    },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Like what you see?
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Contact me
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and let's discuss how we can work together.
                    </p>
                </div>

                <div className="gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <h3 className="mb-6">
                                If you want to work with me, please contact me via email or social media. I'm always open to new opportunities.
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                {item.label}
                                            </div>
                                            <div className="font-medium">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};