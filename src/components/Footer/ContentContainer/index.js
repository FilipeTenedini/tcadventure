import { Container, TextArea } from './style';

export default function ContentContainer({ children, title, text }) {
  return (
    <Container>
      {children}
      <TextArea>
        <h2>
          {title}
        </h2>
        <span>
          {text}
        </span>
      </TextArea>
    </Container>
  );
}
