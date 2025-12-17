import Link from "next/link";
import { useRouter } from "next/router";
import {
  NavigationItem,
  NavigationLink,
  NavigationList,
  NavigationWrapper,
} from "./StyledNavigation";

export default function Navigation() {
  const router = useRouter();

  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem>
          <NavigationLink href="/reminder">Reminder</NavigationLink>
        </NavigationItem>

        <lNavigationItem>
          <NavigationLink href="/">Home</NavigationLink>
        </lNavigationItem>

        <NavigationItem>
          <NavigationLink href="/my-plants">My plants</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
}
