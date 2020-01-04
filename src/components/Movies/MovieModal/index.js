// Core
import React from 'react';
import { createPortal } from 'react-dom';
// Styles
import {
	ModalWrapper,
	ModalCard,
	CloseButton,
	ModalBackground,
	DesctiptionSubTitle,
	DesctiptionSection,
	DescriptionTitle,
	MovieTitle,
	Circle,
	DescriptionWrapper,
	LoadingError,
} from './styles';
// Helpers

const Portal = ({ children }) => {
	const modalRoot = document.getElementById('modal');
	return createPortal(children, modalRoot);
};

const formatCash = n => {
	if (n < 1e3) return n;
	if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
	if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
};

const MovieDetailsModal = React.memo(
	({ movieGenres, details, loading, error, toggleModal, isModalOpen }) => {
		return (
			<Portal>
				{isModalOpen && !loading && (
					<ModalWrapper>
						<ModalCard backgroundImage={`${details.backdrop_path}`} error={error}>
							<CloseButton onClick={() => toggleModal(false)}>
							</CloseButton>
							{error ? (
								<LoadingError> Failed to load =(</LoadingError>
							) : (
								<DescriptionWrapper>
									<MovieTitle>
										{`${details.title}`}
										{details.vote_average !== 0 && (
											<Circle>{details.vote_average}</Circle>
										)}
										<Circle>{details.release_date.slice(0, 4)}</Circle>
									</MovieTitle>

									{details.budget !== 0 && details.revenue !== 0 && (
										<DesctiptionSection>
											<DescriptionTitle>Budget / Worldwide Gross</DescriptionTitle>
											<DesctiptionSubTitle>
												{`${formatCash(details.budget)} /
									${formatCash(details.revenue)}`}
											</DesctiptionSubTitle>
										</DesctiptionSection>
									)}

									{details.production_companies.length >= 1 && (
										<DesctiptionSection>
											<DescriptionTitle>Producion companies</DescriptionTitle>
											<DesctiptionSubTitle>
												{' '}
												{details.production_companies
													.map(company => company.name)
													.join(' • ')}{' '}
											</DesctiptionSubTitle>
										</DesctiptionSection>
									)}
									{details.production_countries.length >= 1 && (
										<DesctiptionSection>
											<DescriptionTitle>Contry</DescriptionTitle>
											<DesctiptionSubTitle>
												{details.production_countries
													.map(contry => contry.name)
													.join(' • ')}{' '}
											</DesctiptionSubTitle>
										</DesctiptionSection>
									)}
									{details.overview && (
										<DesctiptionSection>
											<DescriptionTitle>Overview</DescriptionTitle>
											<DesctiptionSubTitle>{details.overview}</DesctiptionSubTitle>
										</DesctiptionSection>
									)}
								</DescriptionWrapper>
							)}
						</ModalCard>
						<ModalBackground onClick={() => toggleModal(false)} />
					</ModalWrapper>
				)}
			</Portal>
		);
	},
);

export default MovieDetailsModal;
