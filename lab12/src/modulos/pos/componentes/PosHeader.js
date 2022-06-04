import React from 'react';

const PosHeader = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img src="/img/logo.svg" alt="" />
			</div>
			<div className="header__buscador">
				<img src="/img/search.svg" alt="" />
				<input
					type="text"
					className="header__input"
					placeholder="Busca un término"
				/>
			</div>
			<div className="header__usuario">
				<img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg" alt="" />
				<span>Cinthia Calla</span>
			</div>
		</header>
	);
};

export default PosHeader;
