import { memo } from "react";
import GitHubCalendar, { ThemeInput } from "react-github-calendar";

const explicitTheme: ThemeInput = {
  light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
  dark: ["hsl(222, 15%, 25%)", "hsl(224, 80%, 67%)"],
};

export default memo(function Calender({ username }: { username: string }) {
  return (
    username && (
      <div className="w-full mt-10">
        <div className="p-4">
          {/* <p className="text-center">@zarqani on GitHub</p> */}

          <div className="flex justify-center mt-2">
            <div className="grid grid-cols-52 gap-1">
              <GitHubCalendar
                username={username}
                theme={explicitTheme}
                colorScheme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
});
