import { IconCode } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
	icone?: any;
	titulo: string;
	tag?: string;
	url: string;
	mini?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
	const { icone, titulo, url, mini } = props;

	return (
		<NavLink
			to={url}
			className={({ isActive }) => {
				return `flex items-center gap-2  rounded-md
                hover:bg-zinc-800 px-3 py-2 
                ${isActive ? `text-orange-400 bg-zinc-900` : `text-zinc-400`}`;
			}}
		>
			{icone ?? <IconCode />}
			{!mini && titulo}
		</NavLink>
	);
}
