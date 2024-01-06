import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
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
  .tbl-header {
    background-color: #38bec9;
  }
  .tbl-content {
    height: 300px;
    overflow-x: auto;
    margin-top: 0px;
  }
  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }
  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 14px;
    color: #0f172a;
    border-bottom: solid 1px #38bec9;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: left;
    color: block;
  }
`;

export default Wrapper;
