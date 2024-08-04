import { useTheme } from "@/components/theme-provider";
import { memo } from "react";
import GitHubCalendar from "react-github-calendar";

// const explicitTheme: ThemeInput = {
//   light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
//   dark: ["hsl(221, 12%, 38%)", "hsl(224, 80%, 67%)"],
// };

export default memo(function Calender({ username }: { username: string }) {
  const { theme } = useTheme();

  return (
    username && (
      <div className="w-full mt-10">
        <div className="p-4">
          <p className="text-center">@{username} on GitHub</p>

          <div className="flex justify-center mt-2">
            <div className="grid grid-cols-52 gap-1">
              <GitHubCalendar
                username={username}
                colorScheme={theme === "light" ? "light" : "dark"}
                // theme={explicitTheme}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
});
