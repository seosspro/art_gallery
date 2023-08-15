import WebElArtGallery from "./WebElArtGallery";

function App() {
    return (
            <div className="App">
                <WebElArtGallery photos={[
                    {id: 1, src: 'photos/1.jpg', preview: 'photos/preview/1.jpg', description: 'Norway'},
                    {id: 2, src: 'photos/2.jpg', preview: 'photos/preview/2.jpg', description: 'Poland'},
                    {id: 3, src: 'photos/3.jpg', preview: 'photos/preview/3.jpg', description: 'NY'},
                    {id: 4, src: 'photos/4.jpg', preview: 'photos/preview/4.jpg', description: 'RU'},
                    {id: 5, src: 'photos/5.jpg', preview: 'photos/preview/5.jpg', description: 'Poland'},
                    {id: 6, src: 'photos/6.jpg', preview: 'photos/preview/6.jpg', description: 'Poland'},
                    {id: 7, src: 'photos/7.jpg', preview: 'photos/preview/7.jpg', description: 'Poland'},
                ]}/>
            </div>
    )
}

export default App
