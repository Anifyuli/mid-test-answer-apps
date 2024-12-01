import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'First Page' }} />
      <Stack.Screen name="secondPage" options={{ title: 'Second Page' }} />
    </Stack>
  );
}