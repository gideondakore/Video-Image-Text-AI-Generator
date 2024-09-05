import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar =() =>{
    return(
      <Avatar className="h-8 w-8">
      <AvatarImage
      className="P-1 "
      src="/loading.png"
      />
      </Avatar>
    );
};