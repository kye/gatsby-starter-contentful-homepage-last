  import * as React from "react"
  import { graphql } from "gatsby"
  import { Section, Container, Heading, Text } from "./ui"

  export default function NewsItem(props) {
    return (
      <Section>
        <Container>
          <Heading>{props.title}</Heading>
          <Text>{props.effectiveDate}</Text>
          <Text>{props.blurb}</Text>
        </Container>
      </Section>
    )
  }

  export const query = graphql`
    fragment HomepageNewsItemContent on HomepageNewsItem {
      id
      title
      blurb
      effectiveDate
    }
  `