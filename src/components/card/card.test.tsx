import { screen, render } from '@testing-library/react'
import Card from './card'

describe(`Component: Card`, () => {
  const poster = `/image.jpg`
  const childrenProps = `Im child`

  it('should renders correctly, when passed poster and children', () => {
    render(
      <Card poster={poster}>
        <div>{childrenProps}</div>
      </Card>
    )

    expect(screen.getByRole('img')).toHaveAttribute('src', poster)

    expect(screen.getByText(childrenProps)).toBeInTheDocument()
  })

  it('should renders correctly, when poster nod passed', () => {
    render(
      <Card>
        <div>{childrenProps}</div>
      </Card>
    )

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
