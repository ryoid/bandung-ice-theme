import { createSignal, type ComponentProps } from "solid-js";

type Props = {
  class?: string;
};

export function Counter(props: ComponentProps<"div"> & Props) {
  const [count, setCount] = createSignal<number>(0);

  setInterval(() => setCount((prev) => prev + 1), 1000);

  return (
    <div class="container">
      <p class="rounded bg-gray-800 px-1 py-0.5">Count: {count()}</p>
    </div>
  );
}
