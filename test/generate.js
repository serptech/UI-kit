import { build, fake, sequence, incrementingId } from "test-data-bot";

function getRandomName() {
  return sequence((x) => fake((f) => f.hacker.verb() + `_${x}`));
}

const optionBuilder = build("Option").fields({
  label: getRandomName(),
  value: incrementingId(),
});

function generateOptions(count) {
  return [...new Array(count)].map(optionBuilder);
}

export { generateOptions, optionBuilder };
