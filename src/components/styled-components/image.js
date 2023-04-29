import styled from "styled-components"

export const Image = styled.img`
  vertical-align: middle;
  border-style: none;
`

export const ImageIcon = styled(Image)`
  width: 24px;
  height: 24px;
`
export const ImageSmall = styled(Image)`
  width: 40px;
  height: 40px;
`

export const ImageLarge = styled(Image)`
  width: 192px;
  height: 192px;
`
export const ImageMedium = styled(Image)`
  width: 256px;
  height: 360px;
`
export const NotFoundImage = styled(Image)`
  width: auto;
  height: 360px;
  padding-bottom: 1rem;
`