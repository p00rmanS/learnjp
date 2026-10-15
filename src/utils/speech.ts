function canSpeak() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speak(text: string) {
  if (!canSpeak()) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(makeUtterance(text));
}

export function speakAll(texts: string[]) {
  if (!canSpeak()) return;
  window.speechSynthesis.cancel();
  texts.forEach((text) => window.speechSynthesis.speak(makeUtterance(text)));
}

function makeUtterance(text: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.85;
  return utterance;
}
