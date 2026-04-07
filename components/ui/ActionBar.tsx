interface ActionBarProps {
  text: string;
  icon?: string;
}

export default function ActionBar({ text, icon = "i-present" }: ActionBarProps) {
  return (
    <div className="action-bar hidden-xs">
      <div className="container">
        <div className="action-bar__inner">
          <span className={`icons ${icon}`} aria-hidden="true" />
          <span className="action-bar__text">{text}</span>
        </div>
      </div>
    </div>
  );
}
