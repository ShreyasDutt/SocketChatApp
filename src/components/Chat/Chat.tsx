import { Ellipsis, Send, Paperclip, Smile } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [message, setMessage] = useState("");
  const [openEmoji, setopenEmoji] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "44px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <img
            src="https://nexus-dk.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocJOcAec-pn-aZMy9GzvGv8HHErAw-NZl4emmiSp1zI5pgZqFaTR%3Ds96-c&w=1920&q=75"
            alt="UserImg"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="font-bold text-foreground">Username</h1>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>

        <Button variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Example messages */}
        <div className="flex justify-start">
          <div className="bg-card border border-border rounded-lg p-3 max-w-xs">
            <p className="text-foreground">Hey! How are you?</p>
            <span className="text-xs text-muted-foreground">10:30 AM</span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
            <p>I'm doing great! Thanks for asking.</p>
            <span className="text-xs opacity-80">10:32 AM</span>
          </div>
        </div>
      </div>

      {/* Input Area - Fixed at Bottom */}
      <div className="border-t border-border bg-card p-4">
        <div className="flex items-end gap-2 max-w-4xl mx-auto">
          {/* Attachment Button */}
          <Button
            variant="ghost"
            size="icon"
            className="mb-1"
            type="button"
          >
            <Paperclip className="w-5 h-5" />
          </Button>

          {/* Text Input */}
          <div className="flex-1 relative">
            <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="resize-none pr-12 min-h-11 max-h-[120px] overflow-y-auto"
            rows={1}
            />
            {/* Emoji Button inside textarea */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 bottom-1 h-8 w-8"
              type="button"
              onClick={()=>{setopenEmoji(!openEmoji)}}
            >
              <Smile className="w-5 h-5" />
            </Button>
            <div className="absolute bottom-18 -right-5">
                <EmojiPicker open={openEmoji} theme={'dark'} lazyLoadEmojis width={500}/>
            </div>
            
          </div>

          {/* Send Button */}
          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            className="mb-1"
            size="icon"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;