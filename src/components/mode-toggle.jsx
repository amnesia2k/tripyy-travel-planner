import { Moon, Sun } from "lucide-react";
// import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "./theme-provide";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* <Button
        variant="ghost"
        size="icon"
        className="rounded-full border border-primary hover:bg-green-500 hover:bg-opacity-20 hidden lg:flex"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Sun className="transition-all text-primary" />
        ) : (
          <Moon className="transition-all text-primary" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button> */}

      <div className="flex items-center space-x-2">
        <Switch
          id="themeToggle"
          checked={theme === "dark"}
          onClick={toggleTheme}
        />
        <Label htmlFor="themeToggle">
          {theme === "dark" ? (
            <Sun className="h-[20px] w-[20px]" />
          ) : (
            <Moon className="h-[20px] w-[20px]" />
          )}
        </Label>
      </div>
    </>
  );
}
