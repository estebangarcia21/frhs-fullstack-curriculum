package generator

// Section is a top level bullet point.
type Section struct {
	Name        string    // Name is the name of the bullet point.
	Depth       int       // Depth is the amount of parent bullet points it has.
	Subsections []Section // Subsections all bullet points with children.
}

// ReadToplevelSections reads all top level sections.
func ReadToplevelSections() ([]Section, error) {
	return []Section{}, nil
}

// WalkAndCreateDirectory creates a directory for each subsection. The input
// section must be a top level section.
func (c Section) WalkAndCreateDirectory(startingPath string) {
}
