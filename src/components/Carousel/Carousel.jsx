import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

import './Carousel.css';

const DEFAULT_ITEMS = [
  {
    title: 'Daily Commuter',
    description: 'Efficient, practical, and comfortable motorcycles built for everyday city riding and traffic.',
    example: `TVS Raider • Honda Shine • TVS Ronin`,
    advantage:`✓ High Mileage
    ✓ Comfortable Seating
    ✓ Easy Ownership`,
    rating: [
    { label: "Mileage", stars: "⭐⭐⭐⭐⭐" },
    { label: "Comfort", stars: "⭐⭐⭐⭐" },
    { label: "Power", stars: "⭐⭐⭐" },
    { label: "Maintenance", stars: "⭐⭐⭐⭐⭐" }
    ],
    id: 1,
    icon: <FiFileText className="carousel-icon" />
  },
  {
    title: 'Tourer',
    description: 'Long-distance comfort, luggage capacity, and highway capability for riders who love the open road.',
    example: `Himalayan 450 • NX500 • V-Strom SX`,
    advantage:`✓ Wind Protection
    ✓ Large Fuel Tank
    ✓ Highway Comfort`,
rating: [
  { label: "Mileage", stars: "⭐⭐⭐⭐⭐" },
  { label: "Comfort", stars: "⭐⭐⭐⭐⭐" },
  { label: "Power", stars: "⭐⭐⭐⭐⭐" },
  { label: "Maintenance", stars: "⭐⭐⭐" }
],
    id: 2,
    icon: <FiCircle className="carousel-icon" />
  },
  {
    title: 'Adventure Rider',
    description: 'Built for riders who love highways, trails, and roads less traveled.',
    example: `Xpulse 210 • Himalayan 450 • ADV 390`,
    advantage:`✓ Off-Road Capability
    ✓ High Ground Clearance
    ✓ Weekend Exploration`,
    rating: [
    { label: "Mileage", stars: "⭐⭐⭐⭐⭐" },
    { label: "Comfort", stars: "⭐⭐⭐⭐" },
    { label: "Power", stars: "⭐⭐⭐⭐⭐" },
    { label: "Maintenance", stars: "⭐⭐⭐⭐⭐" }
    ],
    id: 3,
    icon: <FiLayers className="carousel-icon" />
  },
  {
    title: 'Enthusiast',
    description: 'Performance-focused motorcycles for riders who enjoy speed and excitement.',
    example: `Duke 390 • Street Triple • Hayabusa`,
    advantage:`✓ Strong Performance 
    ✓ Aggressive Character
    ✓ Thrilling Experience`,
    rating: [
    { label: "Mileage", stars: "⭐⭐⭐⭐⭐" },
    { label: "Comfort", stars: "⭐⭐⭐⭐" },
    { label: "Power", stars: "⭐⭐⭐" },
    { label: "Maintenance", stars: "⭐⭐" }
    ],    
    id: 4,
    icon: <FiLayout className="carousel-icon" />
  },
  {
    title: 'First-Time Buyer',
    description: 'Confidence-inspiring motorcycles that are easy to learn, ride, and own.',
    example: `Hunter 350 • Ronin • Apache RTR 160`,
    advantage:`✓ Beginner Friendly
    ✓ Easy Maintenance
    ✓ Everyday Practicality`,
    rating: [
    { label: "Mileage", stars: "⭐⭐⭐⭐⭐" },
    { label: "Comfort", stars: "⭐⭐⭐⭐" },
    { label: "Power", stars: "⭐⭐⭐⭐⭐" },
    { label: "Maintenance", stars: "⭐⭐⭐⭐⭐" }
    ],
    id: 5,
    icon: <FiCode className="carousel-icon" />
  },
  {
    title: 'Family Rider',
    description: 'Comfortable and practical motorcycles for riders who frequently carry a passenger.',
    example: `CB350 • Classic 350 • Meteor 350`,
    advantage:`✓ Pillion Comfort 
    ✓ Relaxed Ergonomics
    ✓ Weekend Trips`,
    rating: [
    { label: "Mileage", stars: "⭐⭐⭐⭐⭐" },
    { label: "Comfort", stars: "⭐⭐⭐⭐⭐" },
    { label: "Power", stars: "⭐⭐⭐⭐" },
    { label: "Maintenance", stars: "⭐⭐⭐⭐" }
    ],
    id: 6,
    icon: <FiCode className="carousel-icon" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`carousel-item ${round ? 'round' : ''}`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div className="carousel-item-content">
        <div className="carousel-item-title">{item.title}</div>
        <p className="carousel-item-description">{item.description}</p>
        <p className="carousel-item-advantage">{item.advantage}</p>
        <p className="carousel-item-example">{item.example}</p>
      </div>
        <div className="carousel-item-rating">
            {item.rating.map((r, index) => (
                <div className="rating-row" key={index}>
                <span>{r.label}</span>
                <span>{r.stars}</span>
                </div>
            ))}
        </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 1200,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const getResponsiveWidth = (width) => {
    if (width < 640) return 300;      // mobile
    if (width <900) return 700
    if (width < 1024) return 900;     // tablet
    return 1200;                       // desktop
  };

  const [responsiveWidth, setResponsiveWidth] = useState(() => {
    if (typeof window === 'undefined') return baseWidth;
    const available = window.innerWidth - 40;
    return Math.max(240, Math.min(baseWidth, getResponsiveWidth(available)));
  });

  useEffect(() => {
    const updateWidth = () => {
      const available = typeof window !== 'undefined' ? window.innerWidth - 40 : baseWidth;
      const responsive = Math.min(baseWidth, getResponsiveWidth(available));
      setResponsiveWidth(Math.max(240, responsive));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [baseWidth]);

  const itemWidth = responsiveWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''}`}
      style={{
        width: '100%',
        maxWidth: `${responsiveWidth}px`,
        ...(round && { height: `${responsiveWidth}px`, borderRadius: '50%' })
      }}
    >
      <motion.div
        className="carousel-track"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.button
              type="button"
              key={index}
              className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}