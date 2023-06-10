import { useEffect, useState } from 'react';

import { Tree } from 'react-d3-tree';
import './dashboard.css';

import VoteList from '../components/VoteList';

export default function Dashboard() {

  const [treeData, setTreeData] = useState([]);

  const voteData = [
    {'name': "Veggie Burger", 'votes': {'yes': 3, 'no': 0}},
    {'name': "Greek Salad", 'votes': {'yes': 1, 'no': 2}},
    {'name': "Tomato Soup", 'votes': {'yes': 2, 'no': 1}},]; 
  function convert(tree, attr) {
    let res = {}
    if(tree ?? undefined !== undefined) {
      res.name = tree.attr;
      if(attr !== '')
        res.attributes = {'path': attr};
      if(tree.children ?? undefined !== undefined)
        res.children = Object.keys(tree.children).map((item) => convert(tree.children[item], item));
      else
        res.children = null;
      return res;
    } else {
      return null;
    }
  }


  const tree = {
    "attr": "category",
    "children": {
        "Pizza": {
            "attr": "price",
            "children": {
                "medium": {
                    "attr": "yes",
                    "children": null
                },
                "low": {
                    "attr": "yes",
                    "children": null
                },
                "high": {
                    "attr": "price",
                    "children": {
                        "medium": {
                            "attr": "yes",
                            "children": null
                        },
                        "low": {
                            "attr": "yes",
                            "children": null
                        },
                        "high": {
                            "attr": "yes",
                            "children": null
                        }
                    }
                }
            }
        },
        "Burger": {
            "attr": "yes",
            "children": null
        },
        "Salad": {
            "attr": "no",
            "children": null
        },
        "Sandwich": {
            "attr": "yes",
            "children": null
        },
        "Dessert": {
            "attr": "yes",
            "children": null
        },
        "Pasta": {
            "attr": "no",
            "children": null
        },
        "Soup": {
            "attr": "source",
            "children": {
                "kathmandu": {
                    "attr": "yes",
                    "children": null
                },
                "lalitpur": {
                    "attr": "yes",
                    "children": null
                },
                "bhaktapur": {
                    "attr": "no",
                    "children": null
                }
            }
        },
        "Breakfast": {
            "attr": "source",
            "children": {
                "kathmandu": {
                    "attr": "yes",
                    "children": null
                },
                "lalitpur": {
                    "attr": "yes",
                    "children": null
                },
                "bhaktapur": {
                    "attr": "no",
                    "children": null
                }
            }
        },
        "Biryani/Rice": {
            "attr": "source",
            "children": {
                "kathmandu": {
                    "attr": "yes",
                    "children": null
                },
                "lalitpur": {
                    "attr": "no",
                    "children": null
                },
                "bhaktapur": {
                    "attr": "yes",
                    "children": null
                }
            }
        }
    }
};


  useEffect(() => {
    let data = convert(tree, '');
    setTreeData([data,data]);
    console.log(treeData)
  }, [])
  
    return (
      <div className="m-3 p-6
">
      <h2> All Generated Trees </h2>
      {treeData.map(item => {
        return (
        <div style={{height: '700px' }}>
          <Tree
            data={item}
            orientation="vertical"
            scaleExtent={{min:0.1, max:0.8}}
            translate={{x: 900, y: 300}}
            separation={{nonSiblings: 0.2, siblings: 1.2}}
          />
        </div>
        )
      })}

      <VoteList data={voteData} />

    </div>
  );
}
