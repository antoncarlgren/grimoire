import * as Font from 'expo-font';

const customFonts = {
  'JetBrainsMono-Regular': require('../assets/fonts/JetBrainsMono-Regular.ttf'),
  'JetBrainsMono-Italic': require('../assets/fonts/JetBrainsMono-Italic.ttf'),
  'JetBrainsMono-Medium': require('../assets/fonts/JetBrainsMono-Medium.ttf'),
  'JetBrainsMono-MediumItalic': require('../assets/fonts/JetBrainsMono-MediumItalic.ttf'),
  'JetBrainsMono-Bold': require('../assets/fonts/JetBrainsMono-Bold.ttf'),
  'JetBrainsMono-BoldItalic': require('../assets/fonts/JetBrainsMono-BoldItalic.ttf')
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
  await new Promise(resolve => setTimeout(resolve, 2000));
}