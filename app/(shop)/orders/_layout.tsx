import { Stack } from "expo-router";

const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Orders" }}
      />
    </Stack>
  );
};

export default OrdersLayout;
