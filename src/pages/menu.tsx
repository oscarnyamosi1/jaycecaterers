import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MENU_ITEMS } from "@/lib/mockData";

const MENU_CATEGORIES = [
  "All",
  "Breakfast",
  "Mains",
  "Beverages"
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ||
      item.category === activeCategory;

    const q = searchQuery.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(q)
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">

      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="text-primary tracking-[0.2em] uppercase text-sm">
            Catering Packages
          </span>

          <h1 className="font-serif text-5xl mt-4 mb-5">
            Event Catering Menu
          </h1>

          <p className="text-muted-foreground">
            Explore breakfast, lunch, dinner and premium buffet
            selections crafted for weddings, corporate functions,
            celebrations and private events.
          </p>

        </div>

        {/* FILTERS */}

        <div className="flex flex-col md:flex-row gap-5 justify-between mb-12">

          <div className="flex flex-wrap gap-2">

            {MENU_CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={
                  activeCategory === cat
                    ? "default"
                    : "outline"
                }
                className="rounded-full"
                onClick={() =>
                  setActiveCategory(cat)
                }
              >
                {cat}
              </Button>
            ))}

          </div>

          <div className="relative w-full md:w-[320px]">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
            />

            <Input
              placeholder="Search meals..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              className="pl-10 rounded-full"
            />

          </div>

        </div>

        {/* GRID */}

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          <AnimatePresence>

            {filteredItems.map((item) => (

              <motion.div
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0
                }}
                className="glass-card overflow-hidden rounded-[2rem] shadow-sm"
              >

                <div className="h-60 overflow-hidden">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-6">

                  <div className="flex justify-between">

                    <h2 className="font-serif text-2xl">
                      {item.name}
                    </h2>

                    <Badge>
                      {item.price}
                    </Badge>

                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">

                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10"
                      >
                        {tag}
                      </Badge>
                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

        {!filteredItems.length && (
          <div className="text-center py-24">

            <h3 className="text-2xl mb-4">
              No menu found
            </h3>

            <Button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
            >
              Reset Filters
            </Button>

          </div>
        )}

      </div>

    </div>
  );
}