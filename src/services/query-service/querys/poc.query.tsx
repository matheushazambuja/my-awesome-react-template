import gql from 'graphql-tag';

const find = (
  props = {
    // fields here
  },
) => {
  const {} = props;

  // Graph QL Query here
  let query = gql`
    {}
  `;
  return query;
};

export default {
  find,
};
