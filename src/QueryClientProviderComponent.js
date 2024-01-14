import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function QueryClientProviderComponent({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

QueryClientProviderComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
