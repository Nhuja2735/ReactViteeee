const GallerySection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Gallery</h2>
        
        <div className="w-full max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground text-lg">Gallery images will be displayed here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;