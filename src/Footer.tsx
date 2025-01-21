import { Mail, MessageSquare, Megaphone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 md:py-6 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
        <div className="mb-2 md:mb-0">
          <p>&copy; 2025 Zoe Jane. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
          <ContactItem icon={<Mail className="w-4 h-4" />}>zoejane [at] zoejane.net</ContactItem>
          <ContactItem icon={<MessageSquare className="w-4 h-4" />}>微信: zoe-zoejane</ContactItem>
          <ContactItem icon={<Megaphone className="w-4 h-4" />}>公众号: ZoeJane</ContactItem>
        </div>
      </div>
    </footer>
  )
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center space-x-1 mb-1 md:mb-0">
      {icon}
      <span>{children}</span>
    </div>
  )
}

