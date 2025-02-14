import { Cookie } from "lucide-react";

import BincookieGame from "./components/bincookie-game";
import { SignInForm } from "./components/sign-in-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Cookie className="size-4" />
            </div>
            帅斌饼干 Pro 版
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignInForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block border-l border-neutral-700">
        <BincookieGame />
      </div>
    </div>
  );
}
