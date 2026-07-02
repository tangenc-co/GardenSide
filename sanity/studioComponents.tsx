import type { ToolMenuProps } from "sanity";

const hiddenToolNames = new Set(["releases", "vision"]);

export function GardenStudioToolMenu(props: ToolMenuProps) {
  const tools = props.tools.filter((tool) => !hiddenToolNames.has(tool.name));
  const activeToolName = tools.some((tool) => tool.name === props.activeToolName) ? props.activeToolName : tools[0]?.name;

  return props.renderDefault({
    ...props,
    activeToolName,
    tools,
  });
}
