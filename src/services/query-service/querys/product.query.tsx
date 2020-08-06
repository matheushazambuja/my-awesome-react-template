import gql from 'graphql-tag';

const list = (props = {}) => {
  const {} = props;

  // Graph QL Query here
  let query = gql`
    {}
  `;
  return query;
};

export default {
  list,
};
