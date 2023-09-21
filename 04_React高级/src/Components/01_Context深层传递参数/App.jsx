import Heading from "./Heading";
import Section from "./Section";

// Context 允许父组件向其下层无论多深的任何组件提供信息，而无需通过 props 显式传递。
export default function Page() {
  return (
    // 在相同的组件中使用并提供context后就不用将 level 参数传给 <Section> 
    <Section>
      <Heading>主标题</Heading>
      <Section>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Section>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  )
}