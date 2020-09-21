import useLoremIpsum from '../../use-lorem-ipsum/src/useLoremIpsum';

export default function Test() {
    const words = useLoremIpsum("words", 2);
    const sentences = useLoremIpsum("sentences", 2);
    const paragraphs = useLoremIpsum("paragraphs", 1);
    return(
    <>
    <h1>Hello</h1>
    {words}
    <hr />
    {sentences}
    <hr />
    {paragraphs}
    </>)
}  