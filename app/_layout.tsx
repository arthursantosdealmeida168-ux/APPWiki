import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

export default function RootLayout() {
  // return <Stack >
  //   <Stack.Screen name="index" options={{title: "Home"}}/>
  //   <Stack.Screen name="mesangems" options={{title: "Mesangems"}}/>
  // </Stack>;
  return (
    <ThemeProvider>
      <Stack screenOptions={ {headerShown: false} }/>
    </ThemeProvider>
    )
}