import { Card, CardContent } from "./ui/card";

const Footer = () => {
    return (
        <footer>

        <Card className="px-5 ">
          <CardContent className="text-sm text-gray-400">
            <p className="mt-5">
              @ 2024 Copyright <span className="font-bold">FSW Barber</span>

            </p>
          </CardContent>
        </Card>

      </footer>

      );
}
 
export default Footer;