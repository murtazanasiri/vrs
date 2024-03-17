import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 70%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  h1 {
    font-size: 30px;
    color: #0f172a;
    text-transform: uppercase;
    font-weight: 300;
    text-align: left;
    margin-bottom: 15px;
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px; /* cellspacing */
    *border-collapse: expression("separate", cellSpacing = "10px");
  }

  td {
    padding: 15px;
    text-align: left;
    vertical-align: left;
    font-weight: 300;
    border-bottom: solid 1px #ddd;
  }

  .title {
    font-style: italic;
    font-size: 18px;
    color: #38bec9;
  }
  .content {
    font-size: 14px;
  }

  .requester {
    display: flex;
    margin-top: 20px;
  }
  .requester > button {
    margin: 5px;
  }
`;

export default Wrapper;
