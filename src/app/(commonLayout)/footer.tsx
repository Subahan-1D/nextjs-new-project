"use client";
import Link from "next/link";
import {
 
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
     <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>

       
        </div>
    </footer>
  );
};

export default Footer;