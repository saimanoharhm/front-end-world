import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Annam Sai Manohar", text: "Learning React is fun!" },
  { id: "q2", author: "Hari", text: "Learning is not easy task :(" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
