import React from 'react';
import Carousel from '../../molecules/carrusel/Carousel';
import { ContainerGallery, ContentGallery, TitleGallery, CharacterTitleGallery, LayoutGallery } from './GalleryStyles';

const Gallery = ({ FormattedMessage }) => {
    return (
        <LayoutGallery>
            <ContainerGallery>
                <CharacterTitleGallery>
                    <TitleGallery>
                        <FormattedMessage id="gallery" />
                    </TitleGallery>
                </CharacterTitleGallery>
                <ContentGallery>
                    <Carousel />
                </ContentGallery>
            </ContainerGallery>
        </LayoutGallery>
    );
}

export default Gallery;
