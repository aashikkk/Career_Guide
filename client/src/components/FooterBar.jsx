"use client";

import { Footer } from "flowbite-react";
import {
	BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTwitter,
} from "react-icons/bs";

function FooterBar() {
	return (
		<Footer>
			<div className="w-full p-10 text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
				<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
					<div>
						<Footer.Brand
							href="/"
							src="../../assets/images/CG_logowdbg.svg"
							alt="Career Guide Logo"
							name="Career Guide"
						/>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="Follow us" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">LinkedIn</Footer.Link>
								<Footer.Link href="#">Facebook</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Legal" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">Privacy Policy</Footer.Link>
								<Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright
						href="#"
						by="CareerGuide™"
						year={2024}
					/>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon
							href="https://www.facebook.com"
							icon={BsFacebook}
						/>
						<Footer.Icon
							href="https://www.instagram.com"
							icon={BsInstagram}
						/>
						<Footer.Icon
							href="https://www.twitter.com"
							icon={BsTwitter}
						/>
						<Footer.Icon
							href="https://www.github.com"
							icon={BsGithub}
						/>
						<Footer.Icon
							href="https://www.dribbble.com"
							icon={BsDribbble}
						/>
					</div>
				</div>
			</div>
		</Footer>
	);
}

export default FooterBar;
